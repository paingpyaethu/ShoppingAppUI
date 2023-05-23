import DefaultTheme from '../../../theme/variables';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        gap: 12,
    },
    searchContainer: {
        flex: 1,
        height: 52,
        borderRadius: 52,
        borderWidth: 1,
        borderColor: DefaultTheme.Colors.border,
        alignItems: 'center',
        paddingHorizontal: 24,
        flexDirection: 'row',
        gap: 12,
    },
    searchText: {
        flex: 1,
        fontSize: 16,
        color: DefaultTheme.Colors.text,
        opacity: 0.5,
    },
    options: {
        width: 52,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 52,
        backgroundColor: DefaultTheme.Colors.primary,
    },
});

export default styles;
