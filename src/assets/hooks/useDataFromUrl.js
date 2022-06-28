import { useMemo, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import setParamsToUrl from "../funcs/setParamsToUrl";

const useDataFromUrl = () => {
	// const url = useLocation().pathname
	// console.log(window.location.href);
	const { pageNum: page } = useParams()
	// const [page, setPage] = useState(useParams().pageNum)
	const [searchParams, setSearchParams] = useSearchParams();
	const gender = searchParams.get('gender') || ''
	const status = searchParams.get('status') || ''
	const name = searchParams.get('name') || ''
	const navigate = useNavigate()
	const changeUrl = (page, gender, status, name) => {
		navigate(setParamsToUrl(page, gender, status, name), { replace: true })
	}

	return { page, gender, status, name, changeUrl }
}

export default useDataFromUrl