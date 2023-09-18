class User < ApplicationRecord
    has_secure_password

    has_many :day_tasks
    has_many :brain_dumps, through: :day_tasks
    has_many :time_frames, through: :day_tasks

    before_save { self.email = email.downcase }
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
    validates :password, presence: true, length: { minimum: 6 }

end
