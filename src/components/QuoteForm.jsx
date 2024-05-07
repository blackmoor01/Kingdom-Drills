import React,{useState} from 'react';

const QuoteForm = () => {
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        try{
            fetch("/src/components/Newsletter.js",{
                method:"POST",
                body: JSON.stringify({email})
            }).then(res => res.json()).then(data => {
                console.log({data})
            })

        }catch{
            console.error("Oops,Something terribly went wrong!")
        }


    }

    return(
        <div name={"contact"} className={"w-full h-screen bg-gradient-to-b from-[#4682B4] to-gray-800 p-4 text-white"}>
            <div className={"flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full"}>
                <div className={"pb-8 "}>
                    <p className={"text-4xl font-bold inline border-b-4 border-gray-500"}>Contact</p>
                    <p className={"py-6"}>Submit the form below to get in touch with me.</p>
                </div>

                <div className={"justify-center items-center flex"}>
                    <form onSubmit={handleSubmit} className={"flex flex-col w-full md:w-1/2"}>
                        <input type={"name"} name={"name"} placeholder={"Enter your name"} className={"p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"}/>
                        <input type={"email"} name={"email"} placeholder={"Enter your email"} className={"my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"}/>
                        <textarea placeholder={"Enter your message"} name={"message"} rows={10} className={"p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "}></textarea>

                        <button className={"text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"}>
                            Let's Talk
                        </button>

                    </form>
                </div>
            </div>

        </div>
    )
};

export default QuoteForm;
