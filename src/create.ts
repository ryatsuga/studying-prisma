import { PrismaClient } from '@prisma/client';

interface Teacher {
	id?: string;
	name: string;
}

interface Course {
	id?: string;
	name: string;
	description?: string;
	duration: number;
	teacher: Teacher;
}

const prisma = new PrismaClient();

async function create(data: Course) {
	const result = await prisma.courses.create({
		data: {
			duration: data.duration,
			name: data.name,
			description: data.description,
			teacher: {
				connectOrCreate: {
					where: {
						name: data.teacher.name,
					},
					create: {
						name: data.teacher.name,
					},
				},
			},
		},
	});
	console.log(result);
}

export { create, Course };
