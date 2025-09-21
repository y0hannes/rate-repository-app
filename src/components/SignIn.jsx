import { TextInput, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import { Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    padding: 20,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 10,
  },
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(6, 'username should be longer than 6 characters')
    .required('username is required'),
  password: yup
    .string()
    .min(6, 'password should be longer than 6 characters')
    .required('password is required'),
});

const SigninForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={style.container}>
      <TextInput
        style={[
          style.input,
          formik.touched.username &&
            formik.errors.username && { borderColor: 'red' },
        ]}
        placeholder='username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text type='error'> {formik.errors.username} </Text>
      )}
      <TextInput
        style={[
          style.input,
          formik.touched.password &&
            formik.errors.password && { borderColor: 'red' },
        ]}
        placeholder='password'
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text type='error'> {formik.errors.password} </Text>
      )}
      <Pressable style={style.button} onPress={formik.handleSubmit}>
        <Text type='button' fontWeight='bold' position='central'>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log('username: ', values.username);
    console.log('password: ', values.password);
  };
  return <SigninForm onSubmit={onSubmit} />;
};

export default SignIn;
