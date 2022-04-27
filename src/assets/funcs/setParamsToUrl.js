const setParamsToUrl = (currentPage, urlGender, urlStatus, urlName) => {
	let url = `/characters/page=${currentPage}?`
	urlGender ? url += `gender=${urlGender}&` : url += `gender=all&`
	urlStatus ? url += `status=${urlStatus}` : url += `status=all`
	urlName ? url += `&name=${urlName}` : url += ''
	return url
};

export default setParamsToUrl;