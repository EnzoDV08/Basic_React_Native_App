import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Enzo</Text>
          <Text style={styles.title}>Let’s Learn Together!</Text>
        </View>
        <Image
          source={require('../assets/images/icons/icon_avatar_1.png')}
          style={styles.profileIcon}
        />
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search what you need"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Image
            source={require('../assets/images/icons/icon_search.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Continue Course Card */}
      <Text style={styles.sectionTitle}>Continue Course</Text>
      <View style={styles.continueCard}>
        <Text style={styles.cardTitle}>To be a Marketing Pro!</Text>
        <Text style={styles.cardSubtitle}>Challenge yourself to a new skill.</Text>
        <TouchableOpacity
          style={styles.lessonButton}
          onPress={() => navigation.navigate('Course')}
        >
          <Text style={styles.lessonButtonText}>Lesson 3</Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/images/cards/course_card_1.png')}
          style={styles.cardImage}
        />
      </View>

      {/* Top Courses */}
      <Text style={styles.sectionTitle}>Top Courses</Text>
        <View style={styles.courseGrid}>
        {[
            { title: 'Marketing', count: 14, image: require('../assets/images/cards/course_card_1.png'), bg: '#FFD5EC' },
            { title: 'Design', count: 21, image: require('../assets/images/cards/course_card_2.png'), bg: '#D5E1FF' },
          { title: 'Development', count: 12, image: require('../assets/images/cards/course_card_3.png'), bg: '#C4F3F2' },
          { title: 'Business', count: 18, image: require('../assets/images/cards/course_card_4.png'), bg: '#FFEACF' },
          { title: 'AI & ML', count: 8, image: require('../assets/images/cards/course_card_5.png'), bg: '#C5CFFF' },
          { title: 'Photography', count: 10, image: require('../assets/images/cards/course_card_6.png'), bg: '#FFD5D5' },
        ].map((course, index) => (
            <Animated.View
            key={index}
            entering={FadeInUp.duration(400).delay(index * 100)} // stagger effect
            style={[styles.courseCard, { backgroundColor: course.bg }]}
            >
            <Image source={course.image} style={styles.courseImage} />
            <Text style={styles.courseTitle}>{course.title}</Text>
            <Text style={styles.courseCount}>{course.count} Courses</Text>
            </Animated.View>
        ))}
        </View>

      {/* Explore More Button */}
      <TouchableOpacity
        style={styles.exploreButton}
        onPress={() => navigation.navigate('Course')}
      >
        <Text style={styles.exploreText}>Go to Courses</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 18,
    color: '#666',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 2,
    color: '#1D2C78',
  },
  profileIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 24,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    padding: 12,
    borderRadius: 16,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#1D2C78',
    padding: 12,
    marginLeft: 10,
    borderRadius: 12,
  },
  searchIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 32,
    marginBottom: 12,
    color: '#0A1D56',
  },
  continueCard: {
    backgroundColor: '#FFD500',
    borderRadius: 20,
    padding: 24,
    minHeight: 220,
    marginBottom: 28,
    position: 'relative',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardSubtitle: {
    fontSize: 14,
    marginVertical: 8,
  },
  lessonButton: {
    backgroundColor: '#1D2C78',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 70,
  },
  lessonButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cardImage: {
    position: 'absolute',
    right: 20,
    bottom: 10,
    width: 140,
    height: 140,
    resizeMode: 'contain',
  },
  courseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  courseCard: {
    width: '47%',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  courseImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseCount: {
    fontSize: 13,
    color: '#444',
  },
  exploreButton: {
    marginTop: 20,
    backgroundColor: '#0A1D56',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
  },
  exploreText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
