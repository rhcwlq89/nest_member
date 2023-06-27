import AppDataSource from 'src/datasource';
import { User } from '../entities/user.entity';

const userRepository = AppDataSource.getRepository(User);

export default userRepository;
