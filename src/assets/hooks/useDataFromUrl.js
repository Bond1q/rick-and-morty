import { useMemo, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import setParamsToUrl from "../funcs/setParamsToUrl";

const useDataFromUrl = (setCurPage) => {
	const url = useLocation().pathname

	const [page, setPage] = useState(useParams().pageNum)
	const params = useParams()
	// const { pageNum: page } = useParams()
	useEffect(() => {
		// setPage(params.pageNum)
		// setCurPage(+params.pageNum)
		// console.log(params.pageNum);
	}, [url])
	const [searchParams, setSearchParams] = useSearchParams();
	const gender = searchParams.get('gender') || ''
	const status = searchParams.get('status') || ''
	const name = searchParams.get('name') || ''
	const navigate = useNavigate()
	const changeUrl = (pages, gender, status, name) => {
		navigate(setParamsToUrl(pages, gender, status, name), { replace: true })
	}

	return { page, gender, status, name, changeUrl }
}

export default useDataFromUrl