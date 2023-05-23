import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
	container: {
		// backgroundColor: 'red',
		flexDirection: 'row',
		paddingHorizontal: 24,
		paddingVertical: 24,
		gap: 8,
		alignItems: 'center',
	},
	text: {
		fontSize: 18,
		fontWeight: '600',
	},
  avatar: {
		width: 52,
		borderRadius: 52,
		aspectRatio: 1,
	},
	noti: {
		width: 52,
		aspectRatio: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 52,
		borderWidth: 1,
	},
});

export default styles;
