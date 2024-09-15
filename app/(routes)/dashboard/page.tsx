
import getUserData from "@/actions/get-user-data";
import { auth } from "@clerk/nextjs";
import Dashboard from "./components/dashboard";
import { getGraphData } from "@/actions/get-graph-data";
import { aggregateWeights } from "@/lib/utils";
import axios from 'axios';
import { Currency } from "@/types";
import { redirect } from "next/navigation";


const SaveUser = async () => {
    const { userId } =  auth();

    if(!userId){
        redirect("/sign-in")
    }

    const user = await getUserData(userId);
    const formattedStorageData = aggregateWeights(
        user?.storage?.map((each) => ({
            name: each.item.product.name,
            weight: each.weight,
        }))
    );

    if(!user){
        redirect("/welcome")
    }

    const graphData = await getGraphData(formattedStorageData);

    const fetchCountries = async () => {
        if (user?.country && user?.country.length > 0) {
            return [];
        }

        try {
            const response = await axios.get("http://admin.1stmedia.sa/sniper/currencies.php");
            const countries: Currency[] = response.data;
            return countries;
        } catch (error) {
            console.error("Error fetching countries:", error);
            return [];
        }
    };


    const countries = await fetchCountries();

    return (
        <>
            <Dashboard
                user={user}
                graphData={graphData}
                countries={countries}
            />
        </>
    )

}

export default SaveUser