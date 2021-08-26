import React from 'react';
import {Text, View} from 'react-native';
import TaskComponent from '../components/task.component';
import {DataList} from '../dataExample/data';

const TaskScreen = () => {
  return (
    <View>
      <View>
        <Text>List Task ToDo</Text>
      </View>
      <TaskComponent dataList={DataList} />
    </View>
  );
};

export default TaskScreen;
