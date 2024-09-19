package com.example.application.data.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "comments")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Comment extends AbstractEntity {

    @Column(name = "content")
    @NotNull
    private String content;

    @Column(name = "creationDate")
    @NotNull
    private LocalDateTime creationDateTime;

    @Column(name = "imageUrl")
    private String imageUrl;

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(optional = false)
    @JoinColumn(name = "post_id")
    private Post post;
}
