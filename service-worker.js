
chrome.commands.getAll(function(commands){
  console.log('allCommands', commands);
})

chrome.action.onClicked.addListener((tab) => {
  console.log('clicked');
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: contentScriptFunc,
    args: ['action'],
  });
});

function contentScriptFunc(name) {
  alert(`"${name}" executed`);
}

// This callback WILL NOT be called for "_execute_action"
chrome.commands.onCommand.addListener((command) => {
  console.log(`Command "${command}" called`);
});