var config = {
  style: "mapbox://styles/mapbox/streets-v11",
  accessToken:
    "pk.eyJ1Ijoic2hvZ29oaXJhc2F3YSIsImEiOiJja3Zsd3kxMzk1NDV1MnFvazN4OHI5OWN4In0.I-kllSJi19LcGRCHV4M5aw",
  showMarkers: true,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  //   title: "Mapbox Root",
  //   subtitle: "Mapboxの遍歴をたどったストーリーテリング",
  //   byline: "By a Digital Storyteller",
  //   footer: "Source: source citations, etc.",
  chapters: [
    {
      id: "1",
      alignment: "left",
      hidden: false,
      title: "地図のない世界に光を",
      image:
        "https://shogohirasawa.github.io/Mapbox_rootmap/image/origins/Mapbox_origins-Monitoring_fair_elections_in_Afghanistan.jpeg",
      description:
        "Eric Gundersenによって創設されたMapbox。Mapboxは地図で様々なNGOの支援を行うために作られました。パキスタンの洪水マップやアフガニスタンの選挙マップの作成など、限られたデジタル環境下でも大量のデータをマッピングできるツールとして活用されていました。発展途上国に限らず世界中の様々な分野で高パフォーマンスを発揮する地図プラットフォームがここに誕生しました。",
      location: {
        center: [65.68784,34.32715],
        zoom: 5.41,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: "2",
      alignment: "right",
      hidden: false,
      title: "2010年 Mapbox Inc.設立",
      image:
        "https://shogohirasawa.github.io/Mapbox_rootmap/image/origins/Mapbox origins - Development Seed circa 2012.jpg",
      description:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      location: {
        center: [139.76028, 35.81736],
        zoom: 7.73,
        pitch: 60.0,
        bearing: -9.6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
