// simple interactive behaviour: tabs & CTA
document.addEventListener('DOMContentLoaded', () => {
  // set year in footer
  const year = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = year;

  // option cards
  const optionButtons = document.querySelectorAll('.option-card');
  optionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      optionButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // you can read btn.dataset.tab to change back-end filter or UI
      // e.g. load new search suggestions
    });
  });

  // tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(t => {
    t.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      // you can also change copy or search placeholder:
      const service = t.dataset.service;
      const search = document.getElementById('search');
      if (search) {
        search.placeholder = service === 'cowork' ? 'Search location or workspaces in Hyderabad' :
                             service === 'managed' ? 'Search managed office locations' :
                             'Search offices or commercials';
      }
    });
  });

  // CTA button action (demo)
  const viewBtn = document.getElementById('view');
  if (viewBtn) viewBtn.addEventListener('click', () => {
    const city = document.getElementById('city')?.value || 'Hyderabad';
    const q = document.getElementById('search')?.value || '';
    alert(`Searching ${city} for: "${q}" — later this will call backend API.`);
  });
});
