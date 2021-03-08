import React, { useState } from "react";
import Box from "./Box";
import "./styles.css";

const App = () => {
  const [dragId, setDragId] = useState();
  const [boxes, setBoxes] = useState([
    {
      id: "Box-1",
      color: "blue",
      order: 1
    },
    {
      id: "Box-2",
      color: "antiquewhite",
      order: 2
    },
    {
      id: "Box-3",
      color: "aqua",
      order: 3
    },
    {
      id: "Box-4",
      color: "black",
      order: 4
    },
    {
      id: "Box-5",
      color: "yellow",
      order: 5
    },
    {
      id: "Box-6",
      color: "yellowgreen",
      order: 6
    },
    {
      id: "Box-7",
      color: "BlueViolet",
      order: 7
    },
    {
      id: "Box-8",
      color: "CadetBlue",
      order: 8
    },
    // {
    //   id: "Box-9",
    //   color: "CornflowerBlue",
    //   order: 9
    // }, 
    // {
    //   id: "Box-10",
    //   color: "violet",
    //   order: 10
    // },  
    // {
    //   id: "Box-11",
    //   color: "wheat",
    //   order: 11
    // },  
    // {
    //   id: "Box-12",
    //   color: "turquoise",
    //   order: 12
    // },  
    // {
    //   id: "Box-13",
    //   color: "tomato",
    //   order: 13
    // },  
    // {
    //   id: "Box-14",
    //   color: "thistle",
    //   order: 14
    // },  
    // {
    //   id: "Box-15",
    //   color: "teal",
    //   order: 15
    // },
    // {
    //   id: "Box-16",
    //   color: "steelblue",
    //   order: 16
    // },  
    // {
    //   id: "Box-17",
    //   color: "tan",
    //   order: 17
    // },  
    // {
    //   id: "Box-18",
    //   color: "springgreen",
    //   order: 18
    // },
    // {
    //   id: "Box-19",
    //   color: "slategray",
    //   order: 19
    // },  
    // {
    //   id: "Box-20",
    //   color: "slateblue",
    //   order: 20
    // },  
    // {
    //   id: "Box-21",
    //   color: "skyblue",
    //   order: 21
    // },  
    // {
    //   id: "Box-22",
    //   color: "goldenrod",
    //   order: 22
    // },  
    // {
    //   id: "Box-23",
    //   color: "sienna",
    //   order: 23
    // },  
    // {
    //   id: "Box-24",
    //   color: "seagreen",
    //   order: 24
    // },  
    // {
    //   id: "Box-25",
    //   color: "gold",
    //   order: 25
    // },
    // {
    //   id: "Box-26",
    //   color: "salmon",
    //   order: 26
    // },  
    // {
    //   id: "Box-27",
    //   color: "sandybrown",
    //   order: 27
    // },  
    // {
    //   id: "Box-28",
    //   color: "lavender",
    //   order: 28
    // },
    // {
    //   id: "Box-29",
    //   color: "saddlebrown",
    //   order: 29
    // },  
    // {
    //   id: "Box-30",
    //   color: "red",
    //   order: 30
    // },
    // {
    //   id: "Box-31",
    //   color: "rosybrown",
    //   order: 31
    // },
    // {
    //   id: "Box-32",
    //   color: "purple",
    //   order: 32
    // },
    // {
    //   id: "Box-33",
    //   color: "rebeccapurple",
    //   order: 33
    // },
    // {
    //   id: "Box-34",
    //   color: "plum",
    //   order: 34
    // },
    // {
    //   id: "Box-35",
    //   color: "powderblue",
    //   order: 35
    // },
    // {
    //   id: "Box-36",
    //   color: "peru",
    //   order: 36
    // },
    // {
    //   id: "Box-37",
    //   color: "pink",
    //   order: 37
    // },
    // {
    //   id: "Box-38",
    //   color: "papayawhip",
    //   order: 38
    // },
    // {
    //   id: "Box-39",
    //   color: "peachpuff",
    //   order: 39
    // }, 
    // {
    //   id: "Box-40",
    //   color: "paleturquoise",
    //   order: 40
    // },  
    // {
    //   id: "Box-41",
    //   color: "palevioletred",
    //   order: 41
    // },  
    // {
    //   id: "Box-42",
    //   color: "palegoldenrod",
    //   order: 42
    // },  
    // {
    //   id: "Box-43",
    //   color: "palegreen",
    //   order: 43
    // },  
    // {
    //   id: "Box-44",
    //   color: "orchid",
    //   order: 44
    // },  
    // {
    //   id: "Box-45",
    //   color: "darkorange",
    //   order: 45
    // },
    // {
    //   id: "Box-46",
    //   color: "olivedrab",
    //   order: 46
    // },  
    // {
    //   id: "Box-47",
    //   color: "orange",
    //   order: 47
    // },  
    // {
    //   id: "Box-48",
    //   color: "olive",
    //   order: 48
    // },
    // {
    //   id: "Box-49",
    //   color: "chocolate",
    //   order: 49
    // },  
    // {
    //   id: "Box-50",
    //   color: "navy",
    //   order: 50
    // },  
    // {
    //   id: "Box-51",
    //   color: "navajowhite",
    //   order: 51
    // },  
    // {
    //   id: "Box-52",
    //   color: "purple",
    //   order: 52
    // },  
    // {
    //   id: "Box-53",
    //   color: "midnightblue",
    //   order: 53
    // },  
    // {
    //   id: "Box-54",
    //   color: "mediumvioletred",
    //   order: 54
    // },  
    // {
    //   id: "Box-55",
    //   color: "mediumblue",
    //   order: 55
    // },
    // {
    //   id: "Box-56",
    //   color: "mediumseagreen",
    //   order: 56
    // },  
    // {
    //   id: "Box-57",
    //   color: "maroon",
    //   order: 57
    // },  
    // {
    //   id: "Box-58",
    //   color: "lime",
    //   order: 58
    // },
    // {
    //   id: "Box-59",
    //   color: "lightyellow",
    //   order: 59
    // },  
    // {
    //   id: "Box-60",
    //   color: "lightsteelblue",
    //   order: 60
    // }, 
    // {
    //   id: "Box-61",
    //   color: "lightpink",
    //   order: 61
    // }, 
    // {
    //   id: "Box-62",
    //   color: "lightsalmon",
    //   order: 62
    // }, 
    // {
    //   id: "Box-63",
    //   color: "lightgoldenrodyellow",
    //   order: 63
    // }, 
    // {
    //   id: "Box-64",
    //   color: "lightcyan",
    //   order: 64
    // }, 
  ]);

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {
    const dragBox = boxes.find((box) => box.id === dragId);
    const dropBox = boxes.find((box) => box.id === ev.currentTarget.id);

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;

    const newBoxState = boxes.map((box) => {
      if (box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.id === ev.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });

    setBoxes(newBoxState);
  };

  return (
    <div className="App">
      {boxes
        .sort((a, b) => a.order - b.order)
        .map((box) => (
          <Box
            key={box.id}
            boxColor={box.color}
            boxNumber={box.id}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
        ))}
    </div>
  );
};

export default App;
