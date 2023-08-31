import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const router = useRouter();

  const mock = {
    isLoading: false,
    error: false,
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {mock.isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : mock.error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={mock.data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                // selectedJob={selectedJob}
                // handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
