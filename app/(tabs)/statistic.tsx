import Expenses from '@/components/Expenses'
import Income from '@/components/Income'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function StatisticScreen() {
     const [type, setType] = useState<string>('income')
     return (
          <SafeAreaView
               style={{
                    flex: 1,
                    backgroundColor: Colors.dark.background,
               }}
          >
               <View
                    style={{
                         width: '100%',
                         paddingVertical: 20,
                         paddingHorizontal: 20,
                         backgroundColor: Colors.light.background,
                         borderBottomWidth: 0.5,
                         borderBottomColor: '#4A4A4A',
                    }}
               >
                    <Text> {"<"} May 2024 {">"} </Text>
               </View>
               <View
                    style={{
                         display: 'flex',
                         flexDirection: 'row',
                    }}
               >
                    <Pressable
                         style={{
                              flex: 1,
                              paddingVertical: 20,
                              backgroundColor: type === 'income' ? Colors.light.background : 'white',
                              alignItems: 'center',
                         }}
                         onPress={() => setType('income')}
                    >
                         <View
                              style={{
                                   display: 'flex',
                                   flexDirection: 'column',
                                   alignItems: 'center',
                              }}
                         >
                              <Text>Income</Text>
                              <Text>-------</Text>
                         </View>
                    </Pressable>
                    <Pressable
                         style={{
                              flex: 1,
                              paddingVertical: 20,
                              backgroundColor: type === 'expenses' ? Colors.light.background : 'white',
                              alignItems: 'center',
                         }}
                         onPress={() => setType('expenses')}
                    >
                         <Text>Expenses</Text>
                         <Text>-------</Text>
                    </Pressable>
               </View>
               <ScrollView
                    style={{
                         backgroundColor: Colors.dark.background,
                         flex: 1,
                    }}
               >
                    {type === 'income' ? (
                         <Income />
                    ) : (
                         <Expenses />
                    )}
               </ScrollView>
               <Pressable>
                    <View
                         style={{
                              backgroundColor: "white",
                              width: 60,
                              height: 60,
                              borderRadius: 999,
                              position: 'absolute',
                              bottom: 20,
                              right: 20,
                              shadowColor: "#000",
                              shadowOffset: {
                                   width: 0,
                                   height: 2,
                              },
                              shadowOpacity: 0.25,
                              shadowRadius: 3.84,

                              elevation: 5,
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                         }}
                    >
                         <Ionicons name="add" size={50} color={Colors.light.blueButton} />
                    </View>
               </Pressable>
          </SafeAreaView>
     )
}
