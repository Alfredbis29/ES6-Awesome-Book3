/* eslint-disable no-undef */
const webDate = document.getElementById('date');
const date = () => {
  window.setInterval(
    () => {
      webDate.innerHTML = `<p>${luxon.DateTime.local().toLocaleString(
        luxon.DateTime.DATETIME_MED_WITH_SECONDS,
      )}</p>`;
    },
    1000,
    this,
  );
};

export default date;
