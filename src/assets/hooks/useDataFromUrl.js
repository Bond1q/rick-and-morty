import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import setParamsToUrl from "../funcs/setParamsToUrl";

const useDataFromUrl = () => {
	const url = useLocation()
	const pageNum = +useParams().pageNum
	const [searchParams, setSearchParams] = useSearchParams();
	const [page, setPage] = useState(pageNum)

	const [gender, setGender] = useState(searchParams.get('gender') || 'all')
	const [status, setStatus] = useState(searchParams.get('status') || 'all')
	const [characterName, setCharacterName] = useState(searchParams.get('name') || '')

	useEffect(() => {
		setPage(pageNum)
	}, [url.pathname])

	useEffect(() => {
		if (gender !== searchParams.get('gender')) {
			setGender(searchParams.get('gender'))
		}
		if (status !== searchParams.get('status')) {
			setStatus(searchParams.get('status'))
		}
		if (characterName !== searchParams.get('name')) {
			setCharacterName(searchParams.get('name'))
		}

	}, [url.search])


	const navigate = useNavigate()

	const changeUrl = (pages, gender, status, name) => {
		navigate(setParamsToUrl(pages, gender, status, name), { replace: true })
	}

	return { page, gender, status, name: characterName, changeUrl }
}

export default useDataFromUrl