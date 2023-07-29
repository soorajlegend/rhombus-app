
import getUserData from "@/actions/get-user-data";
import { auth } from "@clerk/nextjs";
import Dashboard from "./components/dashboard";
import { getGraphData } from "@/actions/get-graph-data";
import { aggregateWeights } from "@/lib/utils";


const SaveUser = async () => {
	const { userId } = auth();

	const user = await getUserData(userId!);
	const formattedStorageData = aggregateWeights(
        user.storage?.map((each) => ({
            name: each.item.product.name,
            weight: each.weight,
        }))
    );


    const graphData = await getGraphData(formattedStorageData);

    return <Dashboard 
		user={user}
		graphData={graphData}
	/>
}

export default SaveUser