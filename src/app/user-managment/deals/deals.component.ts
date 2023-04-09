import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ApiDealsService } from 'src/app/@core/services/Deals/api-deals.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Deal } from 'src/app/@models/deal';
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {
  AllDeals:any
  Potential_Value:Deal[]=[]
  Focus:Deal[]=[]
  Contact_Made:Deal[]=[] 
  Offer_Sent:Deal[]=[]
  Getting_Ready:Deal[]=[]
  SelectValue:string=''
  _inputValue:string=''
  constructor(private Deals_service : ApiDealsService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show()
    this.getAllDeals()
  }
  // Functionalty used to display the data
  drop(event: CdkDragDrop<Deal[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      // let status =event.container.data
      event.container.data.forEach((element:any) => {
        if(event.container.id=='cdk-drop-list-0'){
          element.status='Potential Value'
        }
        else if(event.container.id=='cdk-drop-list-1'){
          element.status='Focus'
        }
        else if(event.container.id=='cdk-drop-list-2'){
          element.status='Contact Made'
        }
        else if(event.container.id=='cdk-drop-list-3'){
          element.status='Offer Sent'
        }
        else{
          element.status='Getting Ready'
        }
        console.log(element.status)
      });
    }
  }

  filterAll(){
    this.AllDeals.deals.forEach((element:Deal) => {
      if(element.status=='Potential Value'){
        this.Potential_Value?.push(element)
      }
      else if(element?.status=='Focus'){
        this.Focus?.push(element)
      }
      else if(element.status=='Contact Made'){
        this.Contact_Made?.push(element)
      }
      else if(element.status=='Offer Sent'){
        this.Offer_Sent?.push(element)
      }
      else{
        this.Getting_Ready?.push(element)
      }
    });
  }
  //display filter By Frist Name
  filterByFristName(){
    this.Potential_Value=this.Potential_Value.filter((item:any)=>item?.first_name.toLocaleLowerCase().indexOf(this._inputValue.toLocaleLowerCase())!== -1)
    this.Focus=this.Focus.filter((item:any)=>item?.first_name.toLocaleLowerCase().indexOf(this._inputValue.toLocaleLowerCase())!== -1)
    this.Contact_Made=this.Contact_Made.filter((item:any)=>item?.first_name.toLocaleLowerCase().indexOf(this._inputValue.toLocaleLowerCase())!== -1)
    this.Offer_Sent=this.Offer_Sent.filter((item:any)=>item?.first_name.toLocaleLowerCase().indexOf(this._inputValue.toLocaleLowerCase())!== -1)
    this.Getting_Ready=this.Getting_Ready.filter((item:any)=>item?.first_name.toLocaleLowerCase().indexOf(this._inputValue.toLocaleLowerCase())!== -1)
    
    
  }
  //display filter By Last Name
  filterByLastName(){
    this.Potential_Value=this.Potential_Value.filter((item:any)=>item?.last_name.toLocaleLowerCase().indexOf(this._inputValue.toLocaleLowerCase())!== -1)
    this.Focus=this.Focus.filter((item:any)=>item?.last_name.toLocaleLowerCase().indexOf(this._inputValue.toLocaleLowerCase())!== -1)
    this.Contact_Made=this.Contact_Made.filter((item:any)=>item?.last_name.toLocaleLowerCase().indexOf(this._inputValue.toLocaleLowerCase())!== -1)
    this.Offer_Sent=this.Offer_Sent.filter((item:any)=>item?.last_name.toLocaleLowerCase().indexOf(this._inputValue.toLocaleLowerCase())!== -1)
    this.Getting_Ready=this.Getting_Ready.filter((item:any)=>item?.last_name.toLocaleLowerCase().indexOf(this._inputValue.toLocaleLowerCase())!== -1)
  }
  //display filter By Email
  filterByEmail(){
    this.Potential_Value=this.Potential_Value.filter((item:any)=>item?.email.toLocaleLowerCase().indexOf(this._inputValue.toLocaleLowerCase())!== -1)
    this.Focus=this.Focus.filter((item:any)=>item?.email.toLocaleLowerCase().indexOf(this._inputValue.toLocaleLowerCase())!== -1)
    this.Contact_Made=this.Contact_Made.filter((item:any)=>item?.email.toLocaleLowerCase().indexOf(this._inputValue.toLocaleLowerCase())!== -1)
    this.Offer_Sent=this.Offer_Sent.filter((item:any)=>item?.email.toLocaleLowerCase().indexOf(this._inputValue.toLocaleLowerCase())!== -1)
    this.Getting_Ready=this.Getting_Ready.filter((item:any)=>item?.email.toLocaleLowerCase().indexOf(this._inputValue.toLocaleLowerCase())!== -1)
  }

  
  //Return All Data
  getAllDeals(){
    this.Deals_service.getAlltDeals().subscribe(res=>{
      this.AllDeals=res
      this.spinner.hide()
      this.filterAll()
      // console.log(this.AllDeals)
    })
  }
  // The return value of the @Output children 
  selectItem(event:any){
    this.SelectValue=event
    if(event=='All Deals'){
      this.getAllDeals()
    }
  }

  get inputValue(){
    return this._inputValue
  }

  set inputValue(value:string){
    this._inputValue=value
    console.log(value)
  }
  // display Data
  Action(){
    let test=this.AllDeals?.deals.find((element:Deal)=>{
      return element.first_name.toLocaleLowerCase()==this._inputValue.toLocaleLowerCase()
      ||
      element.last_name.toLocaleLowerCase()==this._inputValue.toLocaleLowerCase()
      ||
      element.email.toLocaleLowerCase()==this._inputValue.toLocaleLowerCase()
    })
    if(test){
      this.filterAll()
      if(this.SelectValue=='Frist Name'){
        this.filterByFristName()
      }
      else if(this.SelectValue=='Last Name'){
        this.filterByLastName()
      }
      else if(this.SelectValue=='Email'){
        this.filterByEmail()
      }
      else{
        this.filterAll()
      }
      // this._inputValue=''
      this.inputValue=''
    }
    else{
      alert("This value is not found...")
      this.inputValue=''
    }
  }
}
