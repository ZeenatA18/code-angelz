-- Create database
create database jifunze_db;
create role codeAngels login password 'codeAngels123';
grant all privileges on database jifunze_db to codeAngels;
-- create tables
create table kids_name (
    id serial not null primary key,
    first_name text not null
);
create table parent_name (
    id serial not null primary key,
    first_name text not null,
    last_name text not null,
    email varchar(255) not null
);
create table body_parts (
    id serial not null primary key,
    body_part_name text not null
);
create table score (
    id serial not null primary key,
    score text not null
);
create table progress(
    id serial not null primary key,
    kids_name_id int not null,
    score_id int not null,
    foreign key (kids_name_id) references kids_name(id),
    foreign key (score_id) references score(id)
);
--insert into tables
insert into body_parts (body_part_name) values ('Head');
insert into body_parts (body_part_name) values ('Mouth');
insert into body_parts (body_part_name) values ('Ears');
insert into body_parts (body_part_name) values ('Nose');
insert into body_parts (body_part_name) values ('Eyes');
insert into body_parts (body_part_name) values ('Tongue');
insert into body_parts (body_part_name) values ('Arm');
insert into body_parts (body_part_name) values ('Left hand');
insert into body_parts (body_part_name) values ('Right hand');








