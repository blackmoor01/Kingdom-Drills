import React from "react";

const Team = () =>{

    //Function  for displaying dynamically the Team's pictures, Name and Position respectively.
    const OurTeam = () => {
        const data = [
            {
                "Image":require("../assets/COurage (1).jpeg"),
                "Name":"Courage V. Zigah",
                "Position":"(Founder)"
            },
            {
                "Image":require("../assets/Team01.png"),
                "Name":"Adam Smith",
                "Position":"(Co-founder)"
            },
            {
                "Image":require("../assets/Team02.png"),
                "Name":"Taylor Smith",
                "Position":"(Geological Engineer)"

            },
            {
                "Image":require("../assets/Team03.png") ,
                "Name":"Candice Parker",
                "Position":"(Head of Operations)"
            },
            {
                "Image":require("../assets/Team04.png") ,
                "Name":"Tony Parker",
                "Position":"(Hydro Fracture Engineer)"
            },
            {
                "Image":require("../assets/Dennis Akpeko (1) (1).jpeg"),
                "Position":"Technology Consultant"
            }
        ]
        return(
            <div className="flex flex-wrap gap-4 justify-between items-center space-x-4 cursor-pointer">
                {data.map((item, index) => (
                    <div
                        className="flex flex-col items-center justify-center"
                        key={index}
                    >
                        <div className=" flex rounded-lg bg-white shadow-2xl hover:scale-110
                         p-4 w-full h-auto justify-center items-center text-center max-w-xs">
                            <img src={item.Image} alt={`Team ${index}`} className="w-full h-auto"/>
                        </div>
                        <div className="mt-8 font-bold text-sm text-center">{item.Name}</div>
                        <div className={"mt-5 font-bold text-xs md:text-sm text-center"}>{item.Position}</div>

                    </div>
                ))}
            </div>
        )
    }
    return (
        <div name={"our team"} className={"mx-20 md:py-32 py-14"}>
            <h1 className={"text-4xl font-bold"}>Our Team</h1>
            <p className={"text-2xl font-medium py-5 px-1 mb-5"}>Meet the team</p>

            <div className={"flex justify-center"}>
                <OurTeam />
            </div>
        </div>
    )
};

export default Team;