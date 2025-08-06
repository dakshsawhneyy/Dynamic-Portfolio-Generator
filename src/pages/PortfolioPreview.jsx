import { useNavigate } from "react-router-dom";


const PortfolioPreview = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center gap-10 my-10">
            <h1 className="text-3xl font-bold">Choose Your Portfolio Template</h1>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="p-4 border w-[300px] text-center">
                <h2 className="text-xl font-semibold mb-2">Template 1: Modern</h2>
                <button onClick={() => navigate("/template1")} className="bg-black text-white px-4 py-2 mt-3 rounded">
                    Use This Template
                </button>
                </div>

                <div className="p-4 border w-[300px] text-center">
                <h2 className="text-xl font-semibold mb-2">Template 2: Minimalist</h2>
                <button onClick={() => navigate("/template2")} className="bg-black text-white px-4 py-2 mt-3 rounded">
                    Use This Template
                </button>
                </div>
            </div>
        </div>
    )
};

export default PortfolioPreview;