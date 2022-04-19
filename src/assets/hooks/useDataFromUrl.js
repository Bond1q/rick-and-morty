import { useLocation } from "react-router-dom";
import React from "react";

const useDataFromUrl = (urlParams = []) => {
	const href = window.location.href
	const url = new URL(href)
	const dataFromUrl = React.useMemo(() => {
		const returnData = []
		returnData.push(+(url.pathname.split("=")[1]) || 1)
		if (urlParams.length !== 0) {
			urlParams.forEach(param => {
				returnData.push(url.searchParams.get(param))
			})
		}
		return returnData

	}, [href])
	return dataFromUrl
}

export default useDataFromUrl