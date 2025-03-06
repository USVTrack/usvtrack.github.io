import React from 'react';
import ReactDOM from 'react-dom';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
// import * as G2Plot from '@antv/g2plot'
import { Radar } from '@ant-design/plots';

import { Table, Tag, Affix, Image } from 'antd';
import { Col, Row, Avatar, List, Divider } from 'antd';
import { each, groupBy } from '@antv/util';
import samples from "./images/USVTrack-samples.png"
import USV from "./images/USVTrack-USV.png"
import results from "./images/USVTrack-results.png"

const Feature40DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6' },
  textWrapper: { className: 'content6-text', xs: 24, md: 8 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '蚂蚁金融云提供专业的服务',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '基于阿里云计算强大的基础资源',
      },
    ],
  },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
    className: 'content6-img',
    xs: 24,
    md: 16,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: { className: 'content6-title', children: '技术' },
        content: {
          className: 'content6-content',
          children:
            '丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。',
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: { className: 'content6-title', children: '融合' },
        content: {
          className: 'content6-content',
          children:
            '解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。',
        },
      },
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'content6-title', children: '开发' },
        content: {
          className: 'content6-content',
          children:
            '符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
        },
      },
    ],
  },
};

class RadarChart extends React.PureComponent {


  getBlockChildren = (data) =>
    data.map(($item) => {
      const { ...item } = $item;
      const { title, img, content } = item;
      ['title', 'img', 'content'].forEach((key) => delete item[key]);
      return (
        <li key={item.name} {...item}>
          <span {...img}>
            <img src={img.children} width="100%" alt="img" />
          </span>
          <h2 {...title}>{title.children}</h2>
          <div {...content}>{content.children}</div>
        </li>
      );
    });

  render() {
    const { ...props } = this.props;
    // const { ...props } = {Feature40DataSource};
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    // console.log(dataSource)

    // const {dataSource}=Feature40DataSource

    // const adverse = "../images/adverse-4.png"

    const radar_data = [
      {
        name: 'Color, Texture, Shape',
        star: 1,
      },
      {
        name: 'Range Measurement',
        star: 5,
      },
      {
        name: 'Velocity Measurement',
        star: 5,
      },
      {
        name: 'Lighting Robustness',
        star: 5,
      },
      {
        name: 'Weather Robustness',
        star: 5,
      },
      {
        name: 'Classification Ability',
        star: 2,
      },
      {
        name: '3D Perception',
        star: 1,
      },
      {
        name: 'Cost Advantage',
        star: 4,
      },
    ];
    const radar_config = {
      data: radar_data.map((d) => ({ ...d, star: d.star })),
      xField: 'name',
      yField: 'star',
      appendPadding: [0, 20, 0, 20],
      color: '#B2934A',
      legend: true,
      meta: {
        star: {
          alias: 'Radar Ability',
          min: 0,
          nice: true,
          formatter: (v) => v,
        },
      },
      xAxis: {
        tickLine: null,
      },
      yAxis: {
        label: false,
        grid: {
          alternateColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
      // 开启辅助点
      point: {
        size: 2,
      },
      area: {},
      // padding: [20, 0, 0, 0]
    };

    const camera_data = [
      {
        name: 'Color, Texture, Shape',
        star: 5,
      },
      {
        name: 'Range Measurement',
        star: 2,
      },
      {
        name: 'Velocity Measurement',
        star: 2,
      },
      {
        name: 'Lighting Robustness',
        star: 3,
      },
      {
        name: 'Weather Robustness',
        star: 3,
      },
      {
        name: 'Classification Ability',
        star: 5,
      },
      {
        name: '3D Perception',
        star: 3,
      },
      {
        name: 'Cost Advantage',
        star: 5,
      },
    ];
    const camera_config = {
      data: camera_data.map((d) => ({ ...d, star: d.star })),
      xField: 'name',
      yField: 'star',
      appendPadding: [0, 20, 0, 20],
      color: '#B66A6A',
      meta: {
        star: {
          alias: 'Camera Ability',
          min: 0,
          nice: true,
          formatter: (v) => v,
        },
      },
      xAxis: {
        tickLine: null,
      },
      yAxis: {
        label: false,
        grid: {
          alternateColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
      // 开启辅助点
      point: {
        size: 2,
      },
      area: {},
    };

    const fusion_data = [
      {
        name: 'Color, Texture, Shape',
        star: 5,
      },
      {
        name: 'Range Measurement',
        star: 5,
      },
      {
        name: 'Velocity Measurement',
        star: 5,
      },
      {
        name: 'Lighting Robustness',
        star: 5,
      },
      {
        name: 'Weather Robustness',
        star: 5,
      },
      {
        name: 'Classification Ability',
        star: 5,
      },
      {
        name: '3D Perception',
        star: 3,
      },
      {
        name: 'Cost Advantage',
        star: 4,
      },
    ];
    const fusion_config = {
      data: fusion_data.map((d) => ({ ...d, star: d.star })),
      xField: 'name',
      yField: 'star',
      // appendPadding: [0, 30, 0, 30],
      color: '#589D9D',
      meta: {
        star: {
          alias: 'Fusion Ability',
          min: 0,
          nice: true,
          formatter: (v) => v,
        },
      },
      xAxis: {
        tickLine: null,
      },
      yAxis: {
        label: false,
        grid: {
          alternateColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
      // 开启辅助点
      point: {
        size: 2,
      },
      area: {},
    };






    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };


    const columns = [
      {
        title: 'Sensor',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Detail',
        dataIndex: 'detail',
        key: 'detail',
        render: (text) => {
          return <div dangerouslySetInnerHTML={{ __html: text }} />
        },
      },
    ];


    const data = [
      {
        key: '1',
        name: 'Radar',
        detail: 'Oculii EAGLE 77GHz Point Cloud Radar, 200m detection range, 0.43m range resolution, 0.27m/s velocity resolution, < 1&deg; azimuth angle resolution, < 1&deg; elevation angle resolution, 110&deg; HFOV, 45&deg; VFOV, 15Hz capture frequency'
      },
      {
        key: '2',
        name: 'Camera',
        detail: 'SONY IMX317 CMOS sensor, RGB color, 1920 x 1080 resolution, 100&deg; HFOV, 60&deg; VFOV, 30Hz capture frequency'
      },
      {
        key: '3',
        name: 'GPS',
        detail: 'latitude, longitude and altitude coordinates, < 2.5m position accu- racy, < 0.1m/s velocity accuracy, 10Hz update rate'
      },
      {
        key: '4',
        name: 'IMU',
        detail: 'l0-axis inertial navigation ARHS (3-axis gyroscope, 3-axis accelerometer, 3-axis magnetometer and a barometer), 0.5&deg; heading accuracy, 0.1&deg; roll/pitch accuracy, 50Hz update rate'
      },
    ];

    const contributions = [
      {
        title: 'USVTrack, the first 4D radar-camera tracking dataset in inland waterways, which offers data from multiple sensors, including a 4D radar, monocular camera, GPS, and IMU.',
      },
      {
        title: 'USVTrack dataset covers a rich diversity of data samples, including <b>various waterways</b> (wide and narrow rivers, canals, moats, docks), diverse <b>time conditions</b> (daytime, nightfall, night), <b>weather conditions</b> (sunny, overcast, rainy, snowy) and <b>lighting conditions</b> (normal, dim, strong).',
      },
      {
        title: 'We provide <b>2D bounding box</b> with <b>track ID</b> annotations. We also provide a <b>toolkit</b> to help researchers in processing, analyzing and training on our dataset.',
      },
      {
        title: 'We build corresponding benchmarks and evaluate popular algorithms for object detection and object tracking tasks.',
      },
    ];


    return (
      <div class="home-page-wrapper content6-wrapper">
        <div class="ant-row home-page content6" id="USVTrack">
          <Divider orientation="center"><h1 name="title" className="title-h1">USVTrack Dataset</h1></Divider>

          <div class="ant-col content6-text ant-col-xs-24 ant-col-md-24">
            <div className="title-wrapper">
              <div className="chart">
                {/* <h1 name="title" className="title-h1">WaterScenes Dataset</h1> */}
                <Image src={samples}></Image>
              </div>
            </div>
          </div>
          <div class="ant-col content6-img ant-col-xs-24 ant-col-md-24" style={{ padding: '10px 0 0 0' }}>
            <List
              header={<h2>Contributions:</h2>}
              itemLayout="horizontal"
              bordered
              dataSource={contributions}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    // avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                    // title={item.title}
                    title={<div dangerouslySetInnerHTML={{ __html: item.title }} />}
                  // description={item.title}
                  />
                </List.Item>
              )}
            />
          </div>
        </div>


        <div class="ant-row home-page content6" id="USV">
          <Divider orientation="center"><h1 name="title" className="title-h1">USV Setup</h1></Divider>
          <div class="ant-col content6-text ant-col-xs-24 ant-col-md-12">
            <Table pagination={{ pageSize: 10, hideOnSinglePage: true }} columns={columns} dataSource={data} />
          </div>
          <div class="ant-col content6-text ant-col-xs-24 ant-col-md-11 ant-col-md-2">
          </div>
          <div class="ant-col content6-text ant-col-xs-24 ant-col-md-11 ant-col-md-10">
            <Image src={USV}></Image>
          </div>
        </div>

        <div class="ant-row home-page content6" id="radar-camera-fusion">
          <Divider orientation="center"><h1 name="title" className="title-h1">Radar-Camera Fusion</h1></Divider>
          <Divider orientation="left" plain>
            {/* <h2>Characteristic of Radar and Camera Sensors</h2> */}
            </Divider>
          <div class="ant-col content6-text ant-col-xs-24 ant-col-md-11">
            <Row>
              <Col span={24} ><Radar {...radar_config} /></Col>
              {/* </Row> */}
              {/* <Row> */}
              <Col span={24} ><Radar {...camera_config} /></Col>
            </Row>
          </div>
          <div class="ant-col content6-text ant-col-xs-24 ant-col-md-13">
            <Row align="start">
              <Col span={24}>
                <Radar {...fusion_config} />
              </Col>

            </Row>
          </div>
          <br></br>
          <br></br>
          <div class="ant-col content6-text ant-col-xs-24 ant-col-md-24">
            <div className="title-wrapper">
              <div className="chart">
                {/* <h1 name="title" className="title-h1">WaterScenes Dataset</h1> */}
                <Image src={results}></Image>
              </div>
            </div>
          </div>
          
        </div>

        <div class="ant-row home-page content6" id="Citation">
          <h1 name="title" class="title-h1">Citation</h1>
          <div style={{ backgroundColor: '#f3f6fa', padding: '10px' }}>
            {/* <code>
              {"@misc{yao2023waterscenes,"}<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;{"title={WaterScenes: A Multi-Task 4D Radar-Camera Fusion Dataset and Benchmarks for Autonomous Driving on Water Surfaces}, "}<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;{"author={Shanliang Yao and Runwei Guan and Zhaodong Wu and Yi Ni and Zile Huang and Ryan Wen Liu and Weiping Ding and Eng Gee Lim and Yong Yue and Hyungjoon Seo and Ka Lok Man and Jieming Ma and Xiaohui Zhu and Yutao Yue},"}<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;{"year={2023},"}<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;{"eprint={2307.06505},"}<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;{"archivePrefix={arXiv},"}<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;{"primaryClass={cs.CV}"}<br></br>
              {"}"}
            </code> */}
          </div>
        </div>

        {/* <div className="chart">
            <h1 name="title" className="title-h1">USV Setup</h1>
            <Row justify="start" align="middle">

              <Col span={8} offset={4}>

                <Table pagination={{ pageSize: 10, hideOnSinglePage: true }} columns={columns} dataSource={data} />
              </Col>

              <Col span={12}>
                <Image src={USV}></Image>
              </Col>

            </Row>
          </div> */}


      </div>

    );
  }
}

export default RadarChart;
