// React Component!
// Follow <-> following
function FollowButton() {
	const [following, setFollowing] = React.useState(false);
	const commonBtnStyle = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100px',
		height: '36px',
		borderRadius: '9999px',
		fontWeight: 'bold'
	};
	const followBtnStyle = {
		...commonBtnStyle,
		backgroundColor: 'black',
		color: 'white'
	};
	const followingBtnStyle = {
		...commonBtnStyle,
		backgroundColor: 'white',
		color: 'black',
		border: '1px solid #cfd9de'
	};
	// Javascript -> JSX

	// Javascript code
	// return React.createElement(
	// 	'div',
	// 	{
	// 		onClick: () => setFollowing(!following),
	// 		style : following ? followBtnStyle : followingBtnStyle
	// 	},
	// 	following ? 'following' : 'Follow'
	// );

	// JSX code
	return(
		<div
			onClick = {() => setFollowing(!following)}
			style = {following ? followBtnStyle : followingBtnStyle}
		>
			{following ? 'following' : 'Follow'}
		</div>
	);
}
