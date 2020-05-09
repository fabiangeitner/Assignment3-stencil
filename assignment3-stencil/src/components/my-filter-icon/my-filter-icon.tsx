import { Component, ComponentInterface, Host, h, State } from '@stencil/core';

@Component({
  tag: 'my-filter-icon',
  styleUrl: 'my-filter-icon.css',
  shadow: true,
})
export class MyFilterIcon implements ComponentInterface {

  
  @State() myFilter!: HTMLElement;

  getMyFilter(ev:UIEvent){
    let img = ev.target as HTMLElement;
    this.myFilter.style.display = 'block';
    img.style.display = 'none';
  }

  render() {
    return (
      <Host>
        <my-filter id="filter" ref={(el)=>this.myFilter = el as HTMLElement}></my-filter>
        <div onClick={(event:UIEvent)=> this.getMyFilter(event)}>
        <img 
        src='../Bilder/filter-list.png' 
        alt='filter-list' 
        id='filter-img'></img>
        </div>
      </Host>
    );
  }

}
