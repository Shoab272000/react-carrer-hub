import Banner from "../../Banner/Banner";
import CategoryLists from "../../CategoryList/CategoryLists";
import Featured from "../../Featured/Featured";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryLists></CategoryLists>
            <Featured></Featured>
        </div>
    );
};

export default Home;