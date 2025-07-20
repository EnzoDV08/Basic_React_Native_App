import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CourseCard() {
  return (
    <View style={styles.card}>
      <View style={styles.textBox}>
        <Text style={styles.title}>To be Marketeers Professional!</Text>
        <Text style={styles.subtitle}>Ready for the new challenge and new career?</Text>
        <View style={styles.lessonTag}>
          <Text style={styles.lessonText}>Lesson 3</Text>
        </View>
      </View>
      <Image
        source={require('../assets/images/courses/course_banner_2.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFD500',
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    marginVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 4,
  },
  textBox: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
    color: '#1D2C78',
  },
  subtitle: {
    fontSize: 13,
    color: '#333',
  },
  lessonTag: {
    marginTop: 10,
    backgroundColor: '#0A1D56',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 14,
    alignSelf: 'flex-start',
  },
  lessonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  image: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
    marginLeft: 16,
  },
});
