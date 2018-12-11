import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'share-button',
  styleUrl: 'share-button.css',
  shadow: true
})
export class ShareButton {

  @Prop() title: string;
  @Prop() text: string;
  @Prop() url: string;

  async share() {
    if ((window as any).Windows) {
      const DataTransferManager = (window as any).Windows.ApplicationModel.DataTransfer.DataTransferManager;

      const dataTransferManager = DataTransferManager.getForCurrentView();
      dataTransferManager.addEventListener('datarequested', (ev) => {
        const data = ev.request.data;

        data.properties.title = this.title;
        data.properties.url = this.url;
        data.setText(this.text);
      });

      dataTransferManager.showShareUI();

      return true;
    } else if ((navigator as any).share) {
      try {
        await (navigator as any).share({
          title: this.title,
          text: this.text,
          url: this.url,
        });

        return true;
      } catch (err) {
        console.error('There was an error trying to share this content');
        return false;
      }
    }
    else {
      window.open(`http://twitter.com/share?text=${this.text}&url=${this.url}&hashtags=${this.title}`, '_blank' )
    }
  }

  render() {
    return (
      <button onClick={() => this.share()}>Share</button>
    );
  }
}
