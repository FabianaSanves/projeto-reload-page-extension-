const intervalo = 30; // segundos

function recarregarPagina() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (tabs[0]) {
      chrome.tabs.reload(tabs[0].id);
    }
  });
}

// Cria o alarme quando o service worker inicia
chrome.alarms.create('reloadAlarm', { periodInMinutes: intervalo / 60 });

// Escuta o alarme e executa a função
chrome.alarms.onAlarm.addListener(function(alarm) {
  if (alarm.name === 'reloadAlarm') {
    recarregarPagina();
  }
});