import { preventMainFunc } from './preventMainFunc';

export const onEpisodeClick = (episodeIndex, urlChange, url, e) => {
	preventMainFunc(e)
	if (!url.includes('seasons') || +(url.split("/").reverse()[0]) !== episodeIndex) {
		urlChange('/seasons/' + episodeIndex)
	}
}

