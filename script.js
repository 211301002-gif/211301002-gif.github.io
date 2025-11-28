// Basic interactions and project rendering (prefilled from resume.pdf)
document.addEventListener('DOMContentLoaded', () => {
  // fill year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // theme toggle (persist in localStorage)
  const tgl = document.getElementById('theme-toggle');
  const current = localStorage.getItem('theme') || 'dark';
  setTheme(current);
  if (tgl) {
    tgl.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }

  // Projects extracted / summarized from resume.pdf
  const projects = [
    {
      title: "Time-series Sales Forecasting",
      desc: "Developed a time-series forecasting model to predict weekly sales. Implemented feature engineering, model training (scikit-learn) and evaluation, and created monitoring for model drift.",
      url: "#",
      tags: ["Python", "scikit-learn", "Time-series"]
    },
    {
      title: "Automated ETL & Data Pipeline",
      desc: "Built an automated ETL pipeline to ingest, clean, and transform data using Pandas and scheduled tasks, improving data freshness for analytics.",
      url: "#",
      tags: ["Python", "Pandas", "ETL"]
    },
    {
      title: "Interactive Dashboards",
      desc: "Designed dashboards and visualizations to help stakeholders explore KPIs and trends; used Streamlit and visualization libraries for quick delivery.",
      url: "#",
      tags: ["Streamlit", "Data Viz"]
    }
  ];

  const grid = document.getElementById('projects-grid');
  if (grid) {
    projects.forEach(p => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <h3><a href="${p.url}" target="_blank" rel="noopener">${p.title}</a></h3>
        <p>${p.desc}</p>
        <div class="chips">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      `;
      grid.appendChild(card);
    });
  }

  // skills (extracted keywords from resume)
  const skills = ["Python", "Pandas", "NumPy", "scikit-learn", "SQL", "Data Visualization", "Streamlit", "Git", "Docker"];
  const skillsList = document.getElementById('skills-list');
  if (skillsList) {
    skills.forEach(s => {
      const span = document.createElement('span');
      span.textContent = s;
      skillsList.appendChild(span);
    });
  }

  // smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});

function setTheme(name){
  if(name === 'light') {
    document.documentElement.setAttribute('data-theme','light');
    document.documentElement.style.setProperty('--bg','#f6f8fb');
    document.documentElement.style.setProperty('--card','#ffffff');
    document.documentElement.style.setProperty('--text','#071022');
    document.documentElement.style.setProperty('--muted','#546175');
    const t = document.getElementById('theme-toggle'); if (t) t.textContent = '🌞';
  } else {
    document.documentElement.setAttribute('data-theme','dark');
    document.documentElement.style.removeProperty('--bg');
    document.documentElement.style.removeProperty('--card');
    document.documentElement.style.removeProperty('--text');
    document.documentElement.style.removeProperty('--muted');
    const t = document.getElementById('theme-toggle'); if (t) t.textContent = '🌙';
  }
  localStorage.setItem('theme', name);
}