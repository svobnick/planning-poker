import {useSearchParams} from "react-router-dom";

const useSearchParam = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const get = name => searchParams.get(name);

    return {
        get
    };
}

export default useSearchParam;
