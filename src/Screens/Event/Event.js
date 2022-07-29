import React from "react";
import ReactPlayer from "react-player";

const Event = () => {
  return (
    <div className="bg-[#141414] text-white">
      <div className="flex items-start pt-10 h-2/3">
        <div className="w-3/4 ml-10 mr-5 h-full">
          <ReactPlayer
            width={"100%"}
            height={"400px"}
            controls={true}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
        </div>
        <div className="w-1/4 mr-10 ml-5 h-full">
          <div className="p-6 bg-[#282828] rounded-lg">
            <div className="font-bold text-lg">2nd T20 - Nottingham</div>
            <div className="my-2">
              <div className="w-5/6">
                {[
                  {
                    name: "IND",
                    ico: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
                    score: "250-8 (20)",
                    bat: true,
                  },
                  {
                    name: "ENG",
                    ico: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png",
                    score: "132-3 (14.1)",
                    bat: false,
                  },
                ].map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="text-xs flex font-semibold items-center justify-between my-4"
                    >
                      <div
                        className={`flex items-center  ${
                          item.bat ? "" : "text-gray-400"
                        }`}
                      >
                        <div>
                          <img className="w-8 rounded-md" src={item.ico} />
                        </div>
                        <div
                          className={`ml-4 text-xs  ${
                            item.bat ? "" : "text-gray-400"
                          }`}
                        >
                          {item.name}
                        </div>
                      </div>
                      <div className={`${item.bat ? "" : "text-gray-400"}`}>
                        {item.score}
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* scoreboard */}
              <div className="my-5">
                {/* scorecard widget */}
                <div className="w-5/6 my-2">
                  {[
                    {
                      name: "",
                      r: "R",
                      b: "B",
                      s: "S",
                      f: "F",
                      sr: "SR",
                    },
                    {
                      name: "R. Pant",
                      r: "21",
                      b: "45",
                      s: "2",
                      f: "15",
                      sr: "354",
                    },
                    {
                      name: "D. Kartik",
                      r: "15",
                      b: "28",
                      s: "6",
                      f: "3",
                      sr: "200",
                    },
                  ].map((item, i) => {
                    return (
                      <div
                        key={i}
                        className={` text-xs flex font-semibold items-center justify-between my-4 ${
                          i === 0 ? "text-gray-400" : ""
                        }`}
                      >
                        <div className="w-4/12  ">
                          <div className="font-normal">{item.name}</div>
                          {i !== 0 && (
                            <div className="text-gray-400  font-normal">
                              not out
                            </div>
                          )}
                        </div>
                        <div className="">{item.r}</div>
                        <div className="">{item.b}</div>
                        <div className="">{item.s}</div>
                        <div className="">{item.f}</div>
                        <div className=" ">{item.sr}</div>
                      </div>
                    );
                  })}
                </div>
                {/* bowler widget */}
                <div className="w-5/6 my-1">
                  {[
                    {
                      name: "",
                      r: "O",
                      b: "R",
                      s: "M",
                      f: "W",
                      sr: "ER",
                    },
                    {
                      name: "Styn",
                      r: "21",
                      b: "45",
                      s: "2",
                      f: "15",
                      sr: "354",
                    },
                  ].map((item, i) => {
                    return (
                      <div
                        key={i}
                        className={`text-xs flex font-semibold items-center text-sm justify-between my-4 ${
                          i === 0 ? "text-gray-400" : ""
                        }`}
                      >
                        <div className="w-4/12">{item.name}</div>
                        <div className="">{item.r}</div>
                        <div>{item.b}</div>
                        <div>{item.s}</div>
                        <div>{item.f}</div>
                        <div>{item.sr}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* winner widget */}
              <div className="text-xs font-medium">
                India need 28 runs on 35 balls
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 py-5">
        <div className="text-xl font-bold">Chelsea FC Vs Liverpool FC</div>
        <div className="text-base font-semibold my-2">
          English Premier league 2022
        </div>
        <div className="text-sm text-gray-400">
          Catch the live sports of english premier league only on amuzi
        </div>
      </div>
      <div className="px-10 py-4">
        <div className="text-2xl font-semibold">More Events</div>
        <div className="flex">
          {[
            {
              name: "India Women In Olympics",
              time: "8:00 PM",
              thumbnail:
                "https://cdn.pixabay.com/photo/2021/09/10/06/47/paddle-tennis-6612340_960_720.jpg",
            },
            {
              name: "India Women In Olympics",
              time: "8:00 PM",
              thumbnail:
                "https://cdn.pixabay.com/photo/2021/09/10/06/47/paddle-tennis-6612340_960_720.jpg",
            },
            {
              name: "India Women In Olympics",
              time: "8:00 PM",
              thumbnail:
                "https://cdn.pixabay.com/photo/2021/09/10/06/47/paddle-tennis-6612340_960_720.jpg",
            },
            {
              name: "India Women In Olympics",
              time: "8:00 PM",
              thumbnail:
                "https://cdn.pixabay.com/photo/2021/09/10/06/47/paddle-tennis-6612340_960_720.jpg",
            },
          ].map((item, i) => {
            return (
              <div className="mr-8 my-5 rounded-t-lg">
                <div className="relative">
                  <img className="rounded-t-3xl " src={item.thumbnail} />
                  <div className="bg-gradient-to-b w-full h-full from-transparent z-20 to-[#141414] absolute top-0"></div>
                </div>
                <div className="text-base font-semibold">{item.name}</div>
                <div className="text-xs ">Live at {item.time}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Event;
