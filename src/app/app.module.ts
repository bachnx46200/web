import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { MenuComponent } from './BGH/menu/menu.component';
import {DemoMaterialModule} from './material-module';
import { TrangchuComponent } from './BGH/trangchu/trangchu.component';
import { QltaikhoanComponent } from './BGH/qltaikhoan/qltaikhoan.component';
import { DstaikhoanComponent } from './BGH/qltaikhoan/dstaikhoan/dstaikhoan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DstaikhoanhsComponent } from './BGH/qltaikhoan/dstaikhoanhs/dstaikhoanhs.component';
import { DstaikhoankhoaComponent } from './BGH/qltaikhoan/dstaikhoankhoa/dstaikhoankhoa.component';
import { CtiettaikhoanComponent } from './BGH/qltaikhoan/ctiettaikhoan/ctiettaikhoan.component';
import { QlyhocsinhComponent } from './BGH/qlyhocsinh/qlyhocsinh.component';
import { CthocsinhComponent } from './BGH/qlyhocsinh/cthocsinh/cthocsinh.component';
import { QlynamhocComponent } from './BGH/qlynamhocmonhoc/qlynamhoc/qlynamhoc.component';
import { QlymonhocComponent } from './BGH/qlynamhocmonhoc/qlymonhoc/qlymonhoc.component';
import { MenuDTComponent } from './DT/menu-dt/menu-dt.component';
import { TrangchuDTComponent } from './DT/trangchu-dt/trangchu-dt.component';
import { TintucDTComponent } from './DT/tintuc-dt/tintuc-dt.component';
import { HoatdongDTComponent } from './DT/tintuc-dt/hoatdong-dt/hoatdong-dt.component';
import { HoctapDTComponent } from './DT/tintuc-dt/hoctap-dt/hoctap-dt.component';
import { ThemoittDTComponent } from './DT/tintuc-dt/themoitt-dt/themoitt-dt.component';



@NgModule({
  declarations: [
    AppComponent,
    DangnhapComponent,
    MenuComponent,
    TrangchuComponent,
    QltaikhoanComponent,
    DstaikhoanComponent,
    DstaikhoanhsComponent,
    DstaikhoankhoaComponent,
    CtiettaikhoanComponent,
    QlyhocsinhComponent,
    CthocsinhComponent,
    QlynamhocComponent,
    QlymonhocComponent,
    MenuDTComponent,
    TrangchuDTComponent,
    TintucDTComponent,
    HoatdongDTComponent,
    HoctapDTComponent,
    ThemoittDTComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
