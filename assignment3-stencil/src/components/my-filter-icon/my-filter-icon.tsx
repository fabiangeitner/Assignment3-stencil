import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'my-filter-icon',
  styleUrl: 'my-filter-icon.css',
  shadow: true,
})
export class MyFilterIcon implements ComponentInterface {

  
  myFilter!: HTMLElement;

  getMyFilter(ev:UIEvent){
    let img = ev.target as HTMLElement;
    if(this.myFilter.style.display == 'none'){
      this.myFilter.style.display = 'block';
      img.style.display = 'none';
    }else{
      this.myFilter.style.display = 'none';
      img.style.display = 'block';
    };
  }

  render() {
    return (
      <Host>
        <my-filter id="filter" ref={(el)=>this.myFilter = el as HTMLElement}></my-filter>
        <div class='filterIcon' onClick={(event:UIEvent)=> this.getMyFilter(event)}>
        <img 
        src='../Bilder/filter-list.png' 
        alt='filter-list' 
        id='filter-img'></img>
        </div>
      </Host>
    );
  }

}
