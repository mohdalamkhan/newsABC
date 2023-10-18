// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import React from 'react';
// import TabViewExample from './tabView/TabView';

// const renderItem = ({item}) => (
//   <View style={styles.item}>
//     <View style={styles.imageContainer}>
//       <Image source={{uri: item.imageUrl1}} style={styles.image} />
//       <Image source={{uri: item.imageUrl2}} style={styles.image} />
//     </View>
//     <Text>{item.name}</Text>
//   </View>
// );

// const DATA = [
//   {
//     id: 'a1',
//     title: 'JavaScript ',
//   },
//   {
//     id: 'a2',
//     title: 'C++',
//   },
//   {
//     id: 'a3',
//     title: 'Python',
//   },
// ];

// const POPULARCOURSEDATA = [
//   {
//     id: '1',
//     title: 'Full Stack ',
//   },
//   {
//     id: '2',
//     title: 'Mobile Development',
//   },
//   {
//     id: '3',
//     title: 'Web Development',
//   },

//   {
//     id: '4',
//     title: 'Backend Development',
//   },
// ];

// const DESIGNCOURSEDATA = [
//   {
//     id: 'abc123',
//     title: 'JavaScript ',
//   },
//   {
//     id: 'abc1234',
//     title: 'C++',
//   },
//   {
//     id: 'abc12345',
//     title: 'Python',
//   },
// ];

// const CourseItem = ({title}: ItemProps) => (
//   <TouchableOpacity style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </TouchableOpacity>
// );

// const PopularCourse = ({title}: ItemProps) => (
//   <TouchableOpacity style={styles.PopularCourseItem}>
//     <Text style={styles.title}>{title}</Text>
//   </TouchableOpacity>
// );

// const DesignCouse = ({title}: ItemProps) => (
//   <TouchableOpacity style={styles.DesignCouse}>
//     <Text style={styles.title}>{title}</Text>
//   </TouchableOpacity>
// );

// const Home = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.headerBox}>
//         <Text style={styles.headerText}>NATIONAL REVIEW</Text>
//       </View>
//       <TabViewExample />

//       {/* <TextInput placeholder="search" style={styles.TextInput} /> */}

//       {/* <View>
//         <Text style={styles.headingStyle}>Course</Text>
//       </View> */}

//       <View>
//         <FlatList
//           horizontal
//           data={DATA}
//           renderItem={({item}) => <CourseItem title={item.title} />}
//           keyExtractor={item => item.id}
//           showsHorizontalScrollIndicator={false}
//         />
//       </View>

//       <View>
//         <FlatList
//           horizontal
//           data={POPULARCOURSEDATA}
//           renderItem={({item}) => <DesignCouse title={item.title} />}
//           keyExtractor={item => item.id}
//         />
//       </View>

//       <View>
//         <Text style={styles.headingStyle}> Popular Course</Text>
//       </View>

//       <View>
//         <FlatList
//           horizontal
//           data={POPULARCOURSEDATA}
//           renderItem={({item}) => <PopularCourse title={item.title} />}
//           keyExtractor={item => item.id}
//         />
//       </View>
//     </View>
//   );
// };
// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   headerBox: {
//     backgroundColor: '#000',
//     width: '100%',
//     height: '10%',
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginLeft: 10,
//     alignSelf: 'center',
//     justifyContent: 'center',
//     marginVertical: 20,
//     fontFamily: 'sans-serif-medium',
//   },
//   TextInput: {
//     width: '90%',
//     height: 50,
//     borderWidth: 1,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginVertical: 20,
//     paddingLeft: 15,
//   },
//   item: {
//     backgroundColor: 'skyblue',
//     padding: 20,
//     marginVertical: 16,
//     marginHorizontal: 16,
//     width: 150,
//     height: 70,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 15,
//   },
//   headingStyle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#000',
//     marginLeft: 10,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#000',
//   },

//   PopularCourseItem: {
//     width: 200,
//     height: 240,
//     backgroundColor: 'skyblue',
//     marginVertical: 16,
//     marginHorizontal: 16,
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },

//   DesignCouse: {
//     width: 240,
//     height: 130,
//     backgroundColor: 'skyblue',
//     marginVertical: 12,
//     marginHorizontal: 16,
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
// });
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import TabViewExample from './tabView/TabView';

const newsData = [
  {
    id: '1',
    image: 'https://example.com/news1.jpg',
    title: 'What is Lorem Ipsum?',
    description:
      'What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsum',
  },
  {
    id: '2',
    title: 'Why do we use it?',
    description:
      'This is the description for News Headline What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsu',
    image: 'https://example.com/news2.jpg',
  },
  {
    id: '3',
    title: 'Where does it come from?',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    image: 'https://example.com/news3.jpg',
  },
  // Add more news items
];

const Home = () => {
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.newsItem}>
      <View>
        <Image source={{uri: item.image}} style={styles.newsImage} />
        <View style={styles.newsText}>
          <Text style={styles.newsTitle}>{item.title}</Text>
          <Text style={styles.newsDescription}>{item.description}</Text>
        </View>
      </View>

      {/* <View style={styles.newsImage}>
        <Image source={{uri: item.image}} style={styles.newsImage} />
      </View>
      <View style={styles.newsText}>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsDescription}>{item.description}</Text>
      </View> */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>NATIONAL REVIEW</Text>
      </View>
      <TabViewExample />
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  newsItem: {
    flexDirection: 'row',
    // borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  newsImage: {
    width: '100%',
    height: 250,
    backgroundColor: 'blue',
  },
  newsText: {
    // flex: 1,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  newsDescription: {
    fontSize: 14,
  },
  headerBox: {
    backgroundColor: '#000',
    width: '100%',
    height: '10%',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    fontFamily: 'sans-serif-medium',
  },
});

export default Home;
