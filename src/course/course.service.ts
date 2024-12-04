/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import { Course } from './schema/course.schema';
import { InjectModel } from '@nestjs/mongoose';
// services are used to interact with the database
@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name)
    private courseModel: mongoose.Model<Course>,
  ) {}
  //add a new course
  async addCourse(newcourse: Course): Promise<Course> {
    const res = await this.courseModel.create(newcourse);
    return res;
  }
  //get all courses
  async getAllCourses(): Promise<Course[]> {
    const res = await this.courseModel.find();
    return res;
  }
  //get a course by id
  async getCourseBYId(id: string): Promise<Course> {
    const res = await this.courseModel.findOne({
      id: id,
    });
    return res;
  }
  // get all courses by price
  async getCoursesByprice(sprice: number): Promise<Course[]> {
    const res = await this.courseModel.find({
      price: sprice,
    });
    return res;
  }
  //update a course status
  //   async updateCourseStatus(id: string, updateCourse: Course): Promise<Course> {
  //     const res = await this.courseModel.find({
  //       id,
  //       updateCourse,
  //     });
  //     return res;
  //   }
  // delete a course
  async deleteCpurse(id: string): Promise<Course> {
    const res = await this.courseModel.findByIdAndDelete({
      id: id,
    });
    return res;
  }
}
