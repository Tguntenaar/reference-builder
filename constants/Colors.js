const tintColor = '#2f95dc';

export default {
  tintColor,
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
  gradeToColor: (gradeString) => {
    const number = parseInt(gradeString, 10);
    if (number < 4.5) {
      return '#ff100a';
    }
    if (number < 6.5) {
      return 'rgb(255,171,10)';
    }
    return 'rgb(10,185,255)'; // '#3fc380';
  },
};
