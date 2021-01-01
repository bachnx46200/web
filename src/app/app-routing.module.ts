import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { MenuComponent } from './BGH/menu/menu.component';
import { TrangchuComponent } from './BGH/trangchu/trangchu.component';
import { QltaikhoanComponent } from './BGH/qltaikhoan/qltaikhoan.component';
import { DstaikhoanComponent } from './BGH/qltaikhoan/dstaikhoan/dstaikhoan.component';
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
const routes: Routes = [
  { path: '', redirectTo: 'dang-nhap', pathMatch: 'full' },
  { path: 'dang-nhap', component: DangnhapComponent },
  {
    path: 'ban-giam-hieu', component: MenuComponent,
    children: [
      { path: '', redirectTo: 'trang-chu', pathMatch: 'full' },
      { path: 'trang-chu', component: TrangchuComponent },
      {
        path: 'quan-ly-tai-khoan', component: QltaikhoanComponent,
        children: [
          { path: '', redirectTo: 'danh-sach-tai-khoan-giao-vien', pathMatch: 'full' },
          { path: 'danh-sach-tai-khoan-giao-vien', component: DstaikhoanComponent },
          { path: 'danh-sach-tai-khoan-hoc-sinh', component: DstaikhoanhsComponent },
          // { path: 'danh-sach-tai-khoan-khoa', component: DstaikhoankhoaComponent },
          { path: 'chi-tiet-tai-khoan', component: CtiettaikhoanComponent },
        ]

      },
      { path: 'quan-ly-hoc-sinh', component: QlyhocsinhComponent},
      { path: 'chi-tiet-hoc-sinh', component: CthocsinhComponent},
      { path: 'quan-ly-nam-hoc', component: QlynamhocComponent},
      { path: 'quan-ly-mon-hoc', component: QlymonhocComponent},
     
    ]
  },

{path:'dao-tao',component:MenuDTComponent,
    children:[
      {path:'',redirectTo:'trang-chu',pathMatch:'full'},
      {path:'trang-chu',component:TrangchuDTComponent},
      {
        path: 'tin-tuc', component: TintucDTComponent,
        children: [       
          { path: 'hoat-dong', component: HoatdongDTComponent },
          { path: 'hoc-tap', component: HoctapDTComponent },
          { path: 'them-moi', component: ThemoittDTComponent },
        ]

      },



    ]


},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
