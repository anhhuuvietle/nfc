import React, { Component } from 'react';
import Header from './Header/Header';
import Tab from './Tab/Tab';
import Section from './Section/Section';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';

class App extends Component {
  state = {
    tab: 1,
    diary: [
      {
        title: "Nhật ký sức khỏe",
        content: [
          {
            date: "Ngày 20/ Tháng 9/ Năm 2018",
            info: "Cây mọc chồi",
            imgs: [
              img1
            ]
          },
          {
            date: "Ngày 23/ Tháng 9/ Năm 2018",
            info: "Cây bắt đầu nảy mầm",
            imgs: [
              img2
            ]
          },
          {
            date: "Ngày 1/ Tháng 10/ Năm 2018",
            info: "Cây ra lá",
            imgs: [
              img3
            ]
          },
          {
            date: "Ngày 3/ Tháng 10/ Năm 2018",
            info: "Cây lên lá, bộ rễ phát triển ra bầu viên nén",
            imgs: [
              img4
            ]
          }
        ]
      },
      {
        title: "Nhật ký chăm sóc",
        content: [
          {
            date: "Ngày 20/ Tháng 9/ Năm 2018",
            info: "Ngâm viên nén cơ dừa vào nước 3-5 phút Viên nén nở ra, gắp hạt 2-3 hạt mầm vào viên nén",
          },
          {
            date: "Ngày 23/ Tháng 9/ Năm 2018",
            info: "Đưa cây ra ánh nắng",
          },
          {
            date: "Ngày 1/ Tháng 10/ Năm 2018",
            info: "Tưới nước cho cây",
          },
          {
            date: "Ngày 1/ Tháng 10/ Năm 2018",
            info: "Đưa cây con vào hệ thống trồng rau ABCcorp",
          }
        ]
      },
      {
        title: "Nhật ký môi trường",
        content: [
          {
            date: "Ngày 20/ Tháng 9/ Năm 2018",
            info: "Độ ẩm 10%",
          },
          {
            date: "Ngày 23/ Tháng 9/ Năm 2018",
            info: "Độ ẩm 10%",
          },
          {
            date: "Ngày 1/ Tháng 10/ Năm 2018",
            info: "Trời nắng đẹp",
          },
          {
            date: "Ngày 1/ Tháng 10/ Năm 2018",
            info: "Trời nắng",
          }
        ]
      },
      {
        title: "Nhật ký hành động",
        content: [
          {
            date: "Ngày 20/ Tháng 9/ Năm 2018",
            info: "Ngâm viên nén cơ dừa vào nước 3-5 phút Viên nén nở ra, gắp hạt 2-3 hạt mầm vào viên nén",
          },
          {
            date: "Ngày 23/ Tháng 9/ Năm 2018",
            info: "Đưa cây ra ánh nắng",
          },
          {
            date: "Ngày 1/ Tháng 10/ Năm 2018",
            info: "Tưới nước cho cây",
          },
          {
            date: "Ngày 1/ Tháng 10/ Năm 2018",
            info: "Đưa cây con vào hệ thống trồng rau ABCcorp",
          }
        ]
      },
    ]
  }
  handleChangeTab = tab => () => this.setState({ tab });
  render() {
    const { diary, tab } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Header />
        <Section data={diary[tab - 1]} tab={this.state.tab - 1} />
        <Tab handleChangeTab={this.handleChangeTab} activeTab={this.state.tab} />
      </div>
    );
  }
}

export default App;
