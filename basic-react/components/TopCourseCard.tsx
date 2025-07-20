import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Props {
  title: string;
  courses: number;
  image: any;
}

export default function TopCourseCard({ title, courses, image }: Props) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{courses} Courses</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 170,
    backgroundColor: '#f9f9f9',
    borderRadius: 20,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 4,
  },
  image: {
    width: 110,
    height: 90,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1D2C78',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },
});
