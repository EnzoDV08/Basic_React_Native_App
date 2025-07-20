import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function CourseScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <View style={styles.bannerWrapper}>
        <Image
          source={require('../assets/images/courses/course_banner_1.png')}
          style={styles.banner}
        />
        <Text style={styles.bannerTitle}>Data Science</Text>

        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start a Course</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailsSection}>
        <Text style={styles.detailsHeader}>Course Details</Text>

        {['Introduction', 'Chapter One', 'Chapter Two', 'Chapter Three'].map((title, index) => (
          <View style={styles.lessonRow} key={index}>
            <Text style={styles.lessonNumber}>0{index + 1}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.lessonTitle}>{title}</Text>
              <Text style={styles.lessonSub}>File Presentation, Video and Quiz</Text>
            </View>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playIcon}>▶</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyText}>BUY NOW</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F4FF',
    flex: 1,
  },
  bannerWrapper: {
    backgroundColor: '#9DC9FF',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 80,
    paddingTop: 50,
    alignItems: 'center',
    position: 'relative',
  },
  banner: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  bannerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  startButton: {
    backgroundColor: '#FFD500',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  startButtonText: {
    fontWeight: '600',
    fontSize: 14,
  },
  detailsSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  detailsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  lessonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 10,
  },
  lessonNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A6A6A6',
    width: 30,
  },
  lessonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  lessonSub: {
    fontSize: 12,
    color: '#888',
  },
  playButton: {
    backgroundColor: '#0A1D56',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginLeft: 10,
  },
  playIcon: {
    color: '#fff',
    fontSize: 14,
  },
  buyButton: {
    backgroundColor: '#0A1D56',
    marginTop: 30,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 40,
  },
  buyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
