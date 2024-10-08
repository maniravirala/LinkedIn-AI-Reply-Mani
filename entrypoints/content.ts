import reactLogo from '@/assets/react.svg';

export default defineContentScript({
  matches: ['https://*.linkedin.com/*'],
  main() {
    console.log('Hello content script!', { id: browser.runtime.id });
    // msg-form__contenteditable from this class we can get the message box
    const icon = document.createElement('img');
    icon.src = reactLogo;
    icon.style.width = '20px';
    icon.style.height = '20px';
    icon.style.marginLeft = '10px';

    const msgBox = document.querySelector('.msg-form__contenteditable');
    if (msgBox) {
      console.log('msgBox', msgBox);
      msgBox.parentElement?.appendChild(icon);
    }
    else{
      console.log('msgBox not found');
    }
  },
  
});
