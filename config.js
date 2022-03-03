var config = {
  style: "mapbox://styles/mapbox/streets-v11",
  accessToken:
    "pk.eyJ1Ijoic2hvZ29oaXJhc2F3YSIsImEiOiJja3Zsd3kxMzk1NDV1MnFvazN4OHI5OWN4In0.I-kllSJi19LcGRCHV4M5aw",
  showMarkers: true,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  //   title: "Mapbox Root Map",
  //   subtitle: "マップボックスの遍歴をたどったストーリーテリング",
  //   byline: "By a Digital Storyteller",
  //   footer: "Source: source citations, etc.",
  chapters: [
    {
      id: "SF",
      alignment: "left",
      hidden: false,
      title: "SF",
      image:
        "https://images.unsplash.com/photo-1506892642965-956d41f262b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FuZnJhbnNpc2NvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      description:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      location: {
        center: [-122.48243, 37.76611],
        zoom: 10.17,
        pitch: 60.0,
        bearing: 32.13,
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
      id: "Japan",
      alignment: "right",
      hidden: false,
      title: "SB",
      image:
        "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c29mdGJhbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
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
