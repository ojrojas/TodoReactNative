import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Task} from '../models/task.model';

const TaskComponent = (props: Props) => {
  const {dataList} = props;
  const renderListItem = (task: Task) => (
    <View key={task.id + 1} style={style.viewTask}>
      <View>
        <Text>{task.id}</Text>
      </View>
      <View>
        <Text>{task.taskName}</Text>
      </View>
    </View>
  );

  return <View>{dataList.map((task: Task) => renderListItem(task))}</View>;
};

const style = StyleSheet.create({
  viewTask: {
    backgroundColor: 'green',
    padding: 10,
    margin: 4,
  },
});

type Props = {
  dataList: Task[];
};

export default TaskComponent;
