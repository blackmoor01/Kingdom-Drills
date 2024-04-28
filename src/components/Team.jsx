import React from "react";

const Team = () =>{

    const OurTeam = () => {
        const data = [
            {
                "Image":require("../assets/Team01.png"),
                "Name":"Adam Smith",
                "Position":"(Co-founder)"
            },
            {
                "Image":require("../assets/Team02.png"),
                "Name":"Taylor Smith",
                "Position":"(Co-founder)"

            },
            {
                "Image":require("../assets/Team03.png") ,
                "Name":"Candice Parker",
                "Position":"(Head of Operations)"
            },
            {
                "Image":require("../assets/Team04.png") ,
                "Name":"Tony Parker",
                "Position":"(Chief Engineer)"
            }
        ]
        return(
            <div className="flex justify-between space-x-4 cursor-pointer">
                {data.map((item, index) => (
                    <div
                        className="flex flex-col items-center justify-center"
                        key={index}
                    >
                        <div className=" flex border-1 rounded-lg bg-white shadow-2xl hover:scale-110
                         p-4 w-72 h-72 md:w-full md:h-auto justify-center items-center text-center">
                            <img src={item.Image} alt={`Logo ${index}`} className="w-full h-auto"/>
                        </div>
                        <div className="mt-2 font-bold">{item.Name}</div>
                        <div className={"mt-2 font-bold"}>{item.Position}</div>

                    </div>
                ))}
            </div>
        )
    }
    return (
        <div name={"our-team"} className={"mx-20 mt-20"}>
            <h1 className={"text-4xl font-bold"}>Our Team</h1>
            <p className={"text-2xl font-medium py-5 px-1 mb-5"}>Meet the team</p>

            <div className={""}>
                <OurTeam />
            </div>


        </div>
    )
};

export default Team;